




function outerMost()
{
    const name1="Utkarsh";

    function inner()
    {
        const name2="Rahul";

        function innerMost()
        {
            const name3="Rohit";

            return name1+" "+name2+" "+name3;
        }

        return innerMost;
    }

    return inner;
}

const partial=outerMost();
const anotherPartial=partial();
const data=anotherPartial();

console.log(data);
