const conditions: { [multiple: number]: string; } = 
{
    3: 'Fizz',
    5: 'Buzz',
};

for (let i: number = 1; i <= 100; i++)
{
    let outputs: string[] = [];

    Object.keys(conditions).map(key => {
        const multiple = Number(key);

        if (numberIsMultipleOf(i, multiple))
            outputs.push(conditions[multiple]);
    });

    console.log(outputs.length > 0 ? outputs.join('') : i.toString());
}

function numberIsMultipleOf(input: number, multiple: number): boolean
{
    return input % multiple === 0;
}
