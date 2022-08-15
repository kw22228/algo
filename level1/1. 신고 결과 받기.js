const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
const report = ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'];
const k = 2;

function solution(id_list, report, k) {
    const reportSet = new Set(report);

    const reportedCnt = {};
    const reportedBy = {};
    const mailCnt = {};

    id_list.forEach(id => {
        reportedCnt[id] = 0;
        mailCnt[id] = 0;
        reportedBy[id] = [];
    });

    reportSet.forEach(report => {
        const [id, reported] = report.split(' ');
        reportedCnt[reported] += 1;
        reportedBy[reported].push(id);
    });

    for (const key in reportedCnt) {
        if (reportedCnt[key] >= k) {
            reportedBy[key].forEach(reporter => {
                mailCnt[reporter] += 1;
            });
        }
    }

    const answer = id_list.map(id => mailCnt[id]);

    console.log(answer);
}

solution(id_list, report, k);
