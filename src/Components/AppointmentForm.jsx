import { useState } from "react";
import { supabase } from "../services/supabase";

const AppointmentForm = ({ advisors, userId }) => {
  const [advisorId, setAdvisorId] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!advisorId || !date) {
      setMessage("Please select an advisor and a date.");
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("appointments")
      .insert([
        { advisor_id: advisorId, client_id: userId, date, status: "scheduled" },
      ]);

    if (error) {
      setMessage("Error booking appointment. Try again.");
    } else {
      setMessage("Appointment booked successfully!");
      setAdvisorId("");
      setDate("");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Book an Appointment</h2>
      {message && (
        <p className="mb-2 text-sm text-center text-red-500">{message}</p>
      )}
      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium">Select an Advisor:</label>
        <select
          className="w-full p-2 border rounded mb-4"
          value={advisorId}
          onChange={(e) => setAdvisorId(e.target.value)}
        >
          <option value="">-- Select --</option>
          {advisors.map((advisor) => (
            <option key={advisor.id} value={advisor.id}>
              {advisor.name} - {advisor.expertise}
            </option>
          ))}
        </select>

        <label className="block text-sm font-medium">Select Date & Time:</label>
        <input
          type="datetime-local"
          className="w-full p-2 border rounded mb-4"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Booking..." : "Book Appointment"}
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
