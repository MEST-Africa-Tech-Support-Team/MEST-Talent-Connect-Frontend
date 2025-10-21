

export default function PositionCard({ p }) {
  return (
    <>
    <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col justify-between">
      <div>
        <div className="">
          <div>
            <h3 className="font-semibold">{p.title}</h3>
            <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-amber-100 text-amber-700">{p.type}</span>
          </div>
          <div className="mt-3 text-xs text-gray-500">
            <div>Posted: {p.posted}</div>
            <div>Deadline: {p.deadline}</div>
            <div>{p.applicants} candidates applied</div>
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
        <button className="flex-1 bg-[#28BBBB] text-white py-2 rounded-lg">View Pipeline</button>
        <button className="border rounded-lg py-2 px-3">Edit</button>
      </div>
    </div>
    </>
  );
}