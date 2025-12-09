import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { FiPlus, FiChevronLeft } from "react-icons/fi";



const STORAGE_KEY = "pipeline_state_v1";

const initialState = {
  columns: {
    shortlisted: {
      id: "shortlisted",
      title: "SHORTLISTED",
      color: "bg-emerald-500",
      items: [
        {
          id: "c-1",
          name: "John Smith",
          subtitle: "Match Score: 87%",
          avatar: "https://i.pravatar.cc/48?img=15",
        },
        {
          id: "c-2",
          name: "Mike Johnson",
          subtitle: "Match Score: 82%",
          avatar: "https://i.pravatar.cc/48?img=12",
        },
        {
          id: "c-3",
          name: "Alex Chen",
          subtitle: "Match Score: 90%",
          avatar: "https://i.pravatar.cc/48?img=32",
        },
      ],
    },
    screening: {
      id: "screening",
      title: "SCREENING",
      color: "bg-yellow-400",
      items: [
        {
          id: "c-4",
          name: "David Wilson",
          subtitle: "Match Score: 93%",
          avatar: "https://i.pravatar.cc/48?img=28",
        },
      ],
    },
    interview: {
      id: "interview",
      title: "INTERVIEW",
      color: "bg-orange-400",
      items: [],
    },
    hired: {
      id: "hired",
      title: "HIRED",
      color: "bg-emerald-400",
      items: [
        {
          id: "c-6",
          name: "Jane Doe",
          subtitle: "Match Score: 95%",
          avatar: "https://i.pravatar.cc/48?img=5",
        },
      ],
    },
  },
};

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("Failed to save pipeline state", e);
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialState;
    return JSON.parse(raw);
  } catch (e) {
    console.warn("Failed to load pipeline state", e);
    return initialState;
  }
}

export default function Pipeline() {
  const [state, setState] = useState(loadState);

  useEffect(() => {
    saveState(state);
  }, [state]);

  // helper to generate id
  const genId = () => `c-${Date.now()}`;

  function onDragEnd(result) {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    // dropped in same place
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const sourceCol = state.columns[source.droppableId];
    const destCol = state.columns[destination.droppableId];

    // copying arrays to mutate
    const sourceItems = Array.from(sourceCol.items);
    const [moved] = sourceItems.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      // reordering in same column
      sourceItems.splice(destination.index, 0, moved);
      const newCol = { ...sourceCol, items: sourceItems };
      setState((prev) => ({
        ...prev,
        columns: { ...prev.columns, [newCol.id]: newCol },
      }));
      return;
    }

    // moving to different column
    const destItems = Array.from(destCol.items);
    destItems.splice(destination.index, 0, moved);

    const newSourceCol = { ...sourceCol, items: sourceItems };
    const newDestCol = { ...destCol, items: destItems };

    setState((prev) => ({
      ...prev,
      columns: {
        ...prev.columns,
        [newSourceCol.id]: newSourceCol,
        [newDestCol.id]: newDestCol,
      },
    }));
  }

  function handleAddCandidate() {
    const name = prompt("Enter candidate full name (or Cancel):");
    if (!name) return;
    const newCandidate = {
      id: genId(),
      name: name.trim(),
      subtitle: "Match Score: 0%",
      avatar: `https://i.pravatar.cc/48?u=${encodeURIComponent(name)}`,
    };
    setState((prev) => {
      const col = prev.columns.shortlisted;
      const updated = { ...col, items: [newCandidate, ...col.items] };
      return {
        ...prev,
        columns: { ...prev.columns, shortlisted: updated },
      };
    });
  }

  function handleViewProfile(candidate) {
    // TODO: wire up your router navigate (e.g. useNavigate) to a profile page
    alert(`Open profile for ${candidate.name} (hook to your route).`);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <button
              className="text-teal-600 inline-flex items-center gap-2 text-sm font-medium"
              onClick={() => window.history.back()}
            >
              <FiChevronLeft />
              Back to Open Positions
            </button>
            {/* <h1 className="text-2xl font-bold mt-3">
              Candidates: <span className="font-semibold">Senior Backend Developer</span>
            </h1> */}
            <div className="mt-2">
              <button className="text-teal-600 text-sm border-b border-teal-400 pb-1">
                All Candidates (30)
              </button>
            </div>
          </div>

          <div>
            <button
              onClick={handleAddCandidate}
              className="inline-flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-lg shadow"
            >
              <FiPlus />
              Add Candidate
            </button>
          </div>
        </div>

        {/* Kanban columns */}
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(state.columns).map((col) => (
              <div key={col.id} className="bg-white rounded-lg border border-gray-100 p-4">
                <div className="flex items-center justify-between pb-3 border-b mb-3">
                  <div className="flex items-center gap-3">
                    <span className={`w-3 h-3 rounded-full ${col.color}`} />
                    <h3 className="text-sm font-semibold text-gray-700">{col.title}</h3>
                    <span className="text-xs text-gray-400">({col.items.length})</span>
                  </div>
                </div>

                <Droppable droppableId={col.id}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={`min-h-40 ${
                        snapshot.isDraggingOver ? "bg-gray-50" : ""
                      }`}
                    >
                      {col.items.length === 0 && (
                        <div className="py-8 text-center text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 mx-auto mb-2 text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6M9 17h6"
                            />
                          </svg>
                          <div className="text-sm">No candidates</div>
                        </div>
                      )}

                      {col.items.map((item, idx) => (
                        <Draggable key={item.id} draggableId={item.id} index={idx}>
                          {(providedDraggable, snapshotDraggable) => (
                            <div
                              ref={providedDraggable.innerRef}
                              {...providedDraggable.draggableProps}
                              {...providedDraggable.dragHandleProps}
                              className={`bg-white border border-gray-100 rounded-md p-4 mb-3 shadow-sm transition ${
                                snapshotDraggable.isDragging
                                  ? "bg-white/95 scale-[1.01] shadow-lg"
                                  : ""
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <img
                                  src={item.avatar}
                                  alt={item.name}
                                  className="w-10 h-10 rounded-full object-cover"
                                />
                                <div className="flex-1">
                                  <div className="font-medium text-gray-800">{item.name}</div>
                                  <div className="text-xs text-gray-400">{item.subtitle}</div>
                                </div>
                              </div>

                              <button
                                onClick={() => handleViewProfile(item)}
                                className="mt-3 text-sm text-teal-600"
                              >
                                View Profile
                              </button>
                            </div>
                          )}
                        </Draggable>
                      ))}

                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}
