const workoutDetails = ({ workout }) => {

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>load/ KG: </strong>{workout.load}</p>
            <p><strong>reps: </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>

        </div>
    )

}

export default workoutDetails