import { HiUserGroup } from "react-icons/hi";
import { FiClock } from "react-icons/fi";
import { FaCalendar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function PositionCard({ p }) {
  const navigate = useNavigate ();


  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col justify-between">
        <div>
          <div className="">
            <div>
              <h3 className="font-semibold">{p.title}</h3>

              <span className={`inline-block mt-2 text-xs px-3 py-1 rounded-full text-white
            ${p.type === "Full-time" ? "bg-[#FF6221]" :
                  p.type === "Contract" ? "bg-green-400" :
                    "bg-[#B627A1]"}`}
              >
                {p.type}
              </span>
            </div>

            <div className="mt-3 text-xs text-gray-500">
              <div className="flex items-center gap-2"><span><FaCalendar /></span>Posted: {p.posted}</div>
              <div className="flex items-center gap-2"><span><FiClock /></span>Deadline: {p.deadline}</div>
              <div className="flex items-center gap-2"><span><HiUserGroup /></span>{p.applicants} candidates applied</div>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="mt-4 text-sm text-gray-600">Pipeline Progress</p>
            <p className="mt-4 text-sm font-medium text-[#28BBBB]">{p.pipelineText}</p>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
            <div
              className="h-3 rounded-full"
              style={{ width: `${p.progress}%`, backgroundColor: "#28BBBB" }}
            />
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <button onClick={() => navigate('/employer/pipeline')} className="flex-1 bg-[#28BBBB] text-white py-2 rounded-lg">View Pipeline</button>
          <button className="border rounded-lg py-2 px-3">Edit</button>
        </div>
      </div>
    </>
  );
}