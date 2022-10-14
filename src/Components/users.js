import React from "react";

const Users = ({ users }) => {
    return (
        <div className="row">
            {
                users.map((item, index) => (
                    <div key={index} className="col">
                        <div className="card" style={{maxWidth : "250px", minHeight: "350px"}}>
                            <img src={item.avatar} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{item.first_name} {item.last_name}</h5>
                                <p>Email: {item.email}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Users