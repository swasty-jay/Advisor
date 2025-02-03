import { useEffect, useState } from "react";
import { supabase } from "../Services/Supabase";

const UserComponent = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) console.error("Error fetching user:", error);
      else setUser(data);

      setLoading(false);
    };

    if (userId) fetchUser();
  }, [userId]);

  if (loading) return <p>Loading user...</p>;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">User Profile</h2>
      {user ? (
        <div>
          <img
            src={user.profile_picture || "https://via.placeholder.com/100"}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4"
          />
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default UserComponent;
