// Create a golfer page
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// Create a Golfer component
// before it renders, it will fetch the golfer data
const Golfer = () => {
  const router = useRouter()
  const { pid } = router.query
  const [state, setState] = useState({
    user: null,
    loading: true,
  });

  useEffect(() => {
    if (pid) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${pid}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.errors) {
            setState({loading: false})
            alert(data.errors[0])
          } else {
            setState({
              user: data.user,
              loading: false,
            });
          }
        })
        .catch((e) => {
          alert(e);
        });
    }
  }, [pid]);

  return (
    <div className="flex flex-row h-screen items-center justify-center">
      <div className="border-solid border border-black p-10 py-5 h-55 rounded shadow-md">
        {state.loading && <p>Loading...</p>}
        {state.user && (
          <div>
            <h1 className="text-2xl font-bold">{state.user.name} 🏌🏻‍♂️</h1>
            <p className="text-lg">{state.user.email}</p>
            {/* show the scores and */}
            <h2 className="text-xl font-bold">Scores</h2>
            <ul>
              {state.user.scores.map((score) => (
                <li key={score.id} className="text-lg">
                  {score.total_score} - {score.played_at}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Golfer;
