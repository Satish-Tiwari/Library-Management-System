import React from "react";
import createMaintenanceContext from "./createMaintenanceContext";

function UseMaintenanceContext(props) {

   const url = 'http://localhost:5000';

   /* ---------------------Maintenance Context------------------------- */

    // add book/movie
    const addBookMovie = async (bookmovie, bmName, authorName, serialNo, category,
        status, cost, procurementDate, quanCop) => {
        const addBookMovie = await fetch(`${url}/addBookMovie`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                "userToken": localStorage.getItem("token")
            },
            body: JSON.stringify({
                bookOrMovie: String(bookmovie),
                bookMovieName: String(bmName),
                authorName: String(authorName),
                serialNo: String(serialNo),
                category: String(category),
                status: String(status),
                cost: String(cost),
                procurementDate: String(procurementDate),
                quanOrCopies: String(quanCop)
            })
        });

        const json = await addBookMovie.json();
        console.log(json);
        console.log("hello add book/Movie............");
        // console.log(authToken);
        console.log(addBookMovie);
        return json;
    }

    // update book/movie
    const updateBookMovie = async (bookmovie, bmName, serialNo,
        status, date) => {
        const updateBookMovie = await fetch(`${url}/updateBookMovie`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                "userToken": localStorage.getItem("token")
            },
            body: JSON.stringify({
                bookOrMovie: String(bookmovie),
                bookMovieName: String(bmName),
                serialNo: String(serialNo),
                status: String(status),
                procurementDate: String(date)
            })
        });

        const json = await updateBookMovie.json();
        console.log("hello update book/Movie............");
        return json;
    }

    // add membership
    const addMembership = async (firstName, lastName, contactNumber, contactAddress, aadharCard, startDate, endDate, membership, membershipNo) => {
        const add = await fetch(`${url}/addMembership`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'userToken': localStorage.getItem("token")
            },
            body: JSON.stringify({
                "firstName": firstName,
                "lastName": lastName,
                "contactNo": contactNumber,
                "contactAddress": contactAddress,
                "aadharNo": aadharCard,
                "startDate": startDate,
                "endDate": endDate,
                "membership": membership,
                "membershipNo": membershipNo
            })
        })

        const json = await add.json();
        return json;
    }


    // update membership
    const updateMembership = async (membershipNumber, startDate, endDate, membership, memebershipRemove) => {
        const updateMembership = await fetch(`${url}/updateMembership`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                "userToken": localStorage.getItem("token")
            },
            body: JSON.stringify({
                "membershipNo": membershipNumber,
                "startDate": startDate,
                "endDate": endDate,
                "membership": membership,
                "memebershipRemove": memebershipRemove
            })
        });

        const json = await updateMembership.json();
        console.log("hello update membership............");
        return json;
    }



    // add usermanagement
    const addUserMgt = async (isNewUser, name, isActive, isAdmin, userMgtNo) => {
        const add = await fetch(`${url}/addUserMgt`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'userToken': localStorage.getItem("token")
            },
            body: JSON.stringify({
                "newOrExisting": isNewUser,
                "name": name,
                "userManagementNo": userMgtNo,
                "status": isActive,
                "admin": isAdmin
            })
        })

        const json = await add.json();
        console.log("hello add user management....");
        return json;
    }


    // update membership
    const updateUserMgt = async (isNewUser, name, isActive, isAdmin, userMgtNo) => {
        const update = await fetch(`${url}/updateUserMgt`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                "userToken": localStorage.getItem("token")
            },
            body: JSON.stringify({
                "newOrExisting": isNewUser,
                "name": name,
                "userManagementNo": userMgtNo,
                "status": isActive,
                "admin": isAdmin
            })
        });

        const json = await update.json();
        console.log("hello update user management............");
        return json;
    }
    return (
        <createMaintenanceContext.Provider
            value={
                {
                    addBookMovie,
                    addMembership,
                    updateBookMovie,
                    updateMembership,
                    addUserMgt,
                    updateUserMgt
                }
            }
        >
            {props.children}
        </createMaintenanceContext.Provider>
    )
}

export default UseMaintenanceContext;