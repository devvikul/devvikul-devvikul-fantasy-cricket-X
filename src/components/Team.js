
const Team = ({players}) => {
    const teamData = players.Team
    return ( 
        <div className="selected-Team">
            <div className="team-text">
            <h2>My Team</h2>
            <div className="player-role">
                Captain get 2x Vice Captain 1.5x
            </div>
            </div>
            <div className="player-card">
            {
                teamData.map(teamItem =>(
                    <div className="teamItem" key={teamItem.player_id}>
                        <div className="tItem"> 
                            <img src={teamItem.team_logo} alt="" />
                            <p>{teamItem.name}</p>
                            <p>{teamItem.event_total_points}</p>
                        </div> 
                        <div className="player-role">
                                <p>C</p>
                                <p>VC</p>
                            </div>
                    </div>
                ))
            }
            </div>
            
        </div>
     );
}
 
export default Team;