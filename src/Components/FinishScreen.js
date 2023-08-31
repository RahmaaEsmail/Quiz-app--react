function FinishScreen({ maxPossiblePoints, points }) {
    const percentage = (points / maxPossiblePoints) * 100;
    let emoji;
    if (percentage === 100) emoji = "🥇";
    if (percentage >= 80 && percentage < 100) emoji = "🎉";
    if (percentage >= 50 && percentage < 80) emoji = "🙃";
    if (percentage >= 0 && percentage < 50) emoji = "😑";
    if (percentage === 0) emoji = "🤦‍♀️";
    return (
        <div className="finish-screen">

            <p className="result">
                <span>{emoji}</span> You scored <strong>{points}</strong> out of {maxPossiblePoints} ({percentage}%)

            </p>
            <p className="highscore">(Highscore : {points} points)</p>

        </div>
    )
}

export default FinishScreen
