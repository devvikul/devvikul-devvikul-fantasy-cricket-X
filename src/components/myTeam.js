
const myTeam = ({players}) => {
    const teamData = players.Team
    return ( 
        <div className="selected-Team">
            <h1>LeagueX Circket League</h1>
            <div className="player-card">
            {
                teamData.map(teamItem =>(
                    <div className="teamItem" key={teamItem.player_id}>
                        <div className="tItem">
                            <div className="player-about">
                                <img src={teamItem.team_logo} alt="" />
                                <p>{teamItem.name}</p>
                                <p>{teamItem.role}</p>
                            </div>
                            <div className="player-role">
                                <p>C</p>
                                <p>VC</p>
                            </div>
                        </div> 
                    </div>
                ))
            }
            </div>
            
        </div>
     );
}
 
export default myTeam;