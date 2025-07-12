const Alerts = ({ message, onCancel, onConfirm }) => {
  return (
    <div className="fixed inset-0  bg-gray-200 bg-opacity-30  flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-lg font-semibold mb-4">Are you sure?</h2>
        <p className="text-gray-600 mb-6">{message}</p>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
