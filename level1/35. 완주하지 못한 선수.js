const participant = ['leo', 'kiki', 'eden'];
const completion = ['eden', 'kiki'];

function solution(participant, completion) {
    const sortParticipant = participant.sort();
    const sortCompletion = completion.sort();

    // 중간에 있을때,, 얼리 리턴
    for (let i = 0; i < sortCompletion; i++) {
        if (sortCompletion[i] !== sortParticipant[i]) return sortParticipant[i];
    }

    return sortParticipant[sortParticipant.length - 1];
}

console.log(solution(participant, completion));
