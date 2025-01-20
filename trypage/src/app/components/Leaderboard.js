import React from 'react'

export default function Leaderboard() {
    return (
        <div style={{ height: '200px', width: '100%', display: 'flex', paddingTop: '10px' }}>
            <div style={{ width: '80%', backgroundColor: '#3A61A2', display: 'flex', flexDirection: 'column' }}>
                {/* 5 rows inside the first part with the provided text aligned to the left */}
                <div style={{
                    flex: 1,
                    backgroundColor: '#3A61A2',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingLeft: '10px',
                    color: 'white',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    Desert Viper - 139/10(19.5)
                </div>
                <div style={{
                    flex: 1,
                    backgroundColor: '#3A61A2',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingLeft: '10px',
                    color: 'white',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    Dubai Capitals -68/3(7.4) Ovs
                </div>
                <div style={{
                    flex: 1,
                    backgroundColor: '#3A61A2',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between', // This aligns the text to the left and right
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    color: 'white',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    <span>CRR :- 9.19</span>
                    <span>RRR:- 5.71</span>
                </div>
                <div style={{
                    flex: 1,
                    backgroundColor: '#3A61A2',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingLeft: '10px',
                    color: 'white',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    Dubai Capitals Needs 72 Runs in 74 Balls
                </div>

                <div style={{
                    height: 'calc(20% + 5%)',
                    backgroundColor: '#3A61A2',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    paddingLeft: '10px',
                    color: 'white',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        height: '100%',
                    }}>
                        <span>Last 6 Balls</span>
                        {/* Circles aligned with "Last 6 Balls" */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            width: 'auto',
                            marginLeft: '8px',
                            alignItems: 'center'
                        }}>
                            {[...Array(6)].map((_, index) => (
                                <div key={index} style={{
                                    width: '22px',     // Increased circle size
                                    height: '22px',    // Increased circle size
                                    borderRadius: '50%',
                                    backgroundColor: '#197C8A',
                                    opacity: 0.7,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '7px', // Added space between circles
                                }}>
                                    {/* Add text inside the circles */}
                                    <span style={{ color: 'white', fontSize: '14px' }}>
                                        {index === 0 || index === 1 || index === 2 ? '0' : index === 3 ? '1' : '-'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Vertical divider with 5px white line and low opacity */}
            <div style={{ width: '5px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}></div>

            {/* Second part with the large "1" in the middle */}
            <div style={{
                width: '20%',
                backgroundColor: '#3A61A2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <span style={{ fontSize: '4rem', color: 'white' }}>1</span>
            </div>
        </div>
    )
}
