import React, { FC, useEffect, useState } from "react";
import { getAllMissions } from "../../services/spaceX/service";
import '../../App.css';
import twitter from '../../assets/580b57fcd9996e24bc43c53e.png'
import wiki from '../../assets/free-opened-book-icon-3163-thumb.png'


export const MissionDisplay: FC = () => {

    const [missions, setMissions] = useState<any>(); 

    useEffect(() => {
        const getMissions = async () => {
            const allMissions = await getAllMissions();
            setMissions(allMissions);            
        }

        getMissions();

    }, []);

    return (
        <>  
        
        <div className="divMissions">

                <p>MISSIONS</p>

        </div>
            <div className="mainContainer">
                <div className="cardsContainer">
                    {missions?.map((missions_id: any, index: number) => (
                        <div className="card">
                            <div className="cardMission">
                                <p>
                                   {missions_id.name}
                                </p>
                            </div>
                            <div className="cardDescription">
                                <p>
                                    {missions_id.description}
                                </p>
                            </div>
                            
                            {missions_id.twitter && (
                                <div className="cardTwitter">
                                    <a href={missions_id.twitter} target="_blank">Twitter</a>
                                </div>
                            )}
                            {missions_id.website && (
                                <div className="cardLinks">
                                    <a href={missions_id.website} target="_blank">Oficcial Website</a>
                                </div>
                            )}
                            {missions_id.wikipedia && (
                                <div className="cardWikipedia">
                                    <a href={missions_id.wikipedia} target="_blank">Wikipedia</a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};