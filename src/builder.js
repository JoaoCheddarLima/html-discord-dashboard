import prettyMilliseconds from "pretty-ms"

class Dashboard {
    constructor() {
        this.fields = []
    }

    addField(data) {
        const { username, total, average, last7 } = data

        const field = `
        <section class="container">
        
        <div class="user-field container my-5 row p-4 pb-0 pe-lg-0  align-items-center rounded-3 border shadow-lg">
        
            <div class="user text-center display-4">
                <strong>${username}</strong>
            </div>
        
            <div class="field">
        
                <div class="lead fw-bold lh-1">
                    <strong>${total}</strong> totais ultimos 7d.
                </div>
        
                <div class="lead">
                    <strong>${average}</strong>/dia.
                </div>
        
            </div>
        
            <div class="dailyStreak"> 
                ${last7.map(e => e > 0 ? `<div class="btn btn-success fw-bold">0h</div>` : `<div class="btn btn-danger fw-bold">${prettyMilliseconds(e)}</div> `).join('')}
            </div>
        
        </div>
        
        </section>
        `

        this.fields.push(field)

        return this
    }

    mount(title) {
        return `
        <html>
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
                <title>${title}</title>
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                    }
                
                    .field {
                        text-align: center;
                        display: flex;
                        gap: 5vw;
                        flex-direction: row;
                    }
                
                    .dailyStreak {
                        display: flex;
                        gap: 1vw;
                        font-weight: bolder;
                    }
                
                    .user-field {
                        display: flex;
                        flex-direction: column;
                        gap: 2vh;
                    }
                </style>
            </head>
            <body>
                ${this.fields.join('')}
            </body>
        </html>
        `
    }
}

export default Dashboard