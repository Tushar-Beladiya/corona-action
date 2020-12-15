import React, { useState } from 'react'
import Airtable from "airtable";

var base = new Airtable({ apiKey: 'key8wpavQxjaqU3JG' }).base('applPl2B8QqxhBUX8');


const Location = () => {
    const [recordList, setRecordList] = useState("");

    const onLocationChanges = async (locValue) => {
        console.log(locValue);
        await base("tblajZIW0vbXdJzZL").select({
            filterByFormula: `{Location} = "${locValue}"`
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function (record) {
                setRecordList(record)
                console.log('Retrieved', record.id);
                console.dir(record);
            });
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
        })
    }

    return (
        <div className="location">
            <img src={require("../asset/img/location.png")} alt="" />
            <select name="location" onChange={(e) => onLocationChanges(e.target.value)} >
                <option value="Amsterdam">Amsterdam</option>
                <option value="Colombia / Venezuala">Colombia / Venezuala</option>
                <option value="Eindhoven">Eindhoven</option>
                <option value="Europe">Europe</option>
                <option value="Leiden">Leiden</option>
                <option value="Rotterdam">Rotterdam</option>
                <option value="The Neterlands">The Neterlands</option>
                <option value="The Netherlands">The Netherlands</option>
                <option value="The Netherlands & UK">The Netherlands & UK</option>
                <option value="World">World</option>
            </select>
        </div>
    );
}

export default Location;