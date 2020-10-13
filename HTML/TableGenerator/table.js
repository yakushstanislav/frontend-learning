/* Simple JS library for generate HTML table */

export function makeTable(data)
{
    let table = document.createElement("table");

    if (data.length)
    {
        /* Generate header */
        {
            let theader = document.createElement("theader");

            let tr = document.createElement("tr");

            for (const key of Object.keys(data[0]))
            {
                let th = document.createElement("th");

                th.appendChild(document.createTextNode(key));

                tr.appendChild(th);
            }

            theader.appendChild(tr);

            table.appendChild(theader);
        }

        /* Generate body */
        {
            let tbody = document.createElement("tbody");

            for (const row of data)
            {
                let tr = document.createElement("tr");

                for (const value of Object.values(row))
                {
                    let td = document.createElement("td");

                    td.appendChild(document.createTextNode(value));

                    tr.appendChild(td);
                }

                tbody.appendChild(tr);
            }

            table.appendChild(tbody);
        }
    }

    return table;
}