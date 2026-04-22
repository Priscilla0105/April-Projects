export default function Modal({ data, setShowModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg w-80">
        <h3 className="text-lg font-bold mb-2">Form Submitted ✅</h3>

        <p><b>Name:</b> {data.name}</p>
        <p><b>Email:</b> {data.email}</p>
        <p><b>Gender:</b> {data.gender}</p>

        <button
          onClick={() => setShowModal(false)}
          className="mt-3 bg-red-500 text-white px-3 py-1 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}