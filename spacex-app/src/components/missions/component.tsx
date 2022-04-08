import React, { FC, useEffect, useState } from "react";
import { getAllMissions } from "../../services/spaceX/service";
import '../../App.css';


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
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};