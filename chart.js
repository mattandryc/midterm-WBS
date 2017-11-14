google.charts.load('current', {'packages': ['gantt']});
google.charts.setOnLoadCallback(drawChart);

function daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
}

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Task ID');
    data.addColumn('string', 'Task Name');
    data.addColumn('string', 'Resource');
    data.addColumn('date', 'Start Date');
    data.addColumn('date', 'End Date');
    data.addColumn('number', 'Duration');
    data.addColumn('number', 'Percent Complete');
    data.addColumn('string', 'Dependencies');

    data.addRows([
        ['Initiate', 'Identify Stakeholders', 'Set Up',
            new Date(2017, 9, 20), null, daysToMilliseconds(14), 100, null],
        ['Kickoff', 'Kickoff Meeting', 'Set Up',
            new Date(2017, 10, 3), null, daysToMilliseconds(1), 100, null],
        ['Scope', 'Scope Statement', 'Planning',
            new Date(2017, 10, 4), null, daysToMilliseconds(21), 100, null],
        ['WBS', 'WBS', 'Planning',
            new Date(2017, 10, 25), null, daysToMilliseconds(30), 42, 'Scope'],
        ['Schedule', 'Project Schedule','Planning',
            new Date(2017, 10, 25), null, daysToMilliseconds(30), 42, 'Scope'],
        ['budget', 'Budget Projection','Planning',
            new Date(2017, 10, 25), null, daysToMilliseconds(30), 42, 'Scope'],
        ['Consult', 'Consult Medical Experts','Development',
            new Date(2017, 11, 25), null, daysToMilliseconds(30), 0, 'budget'],
        ['watchos', 'WatchOS Background','Development',
            new Date(2018, 0, 25), null, daysToMilliseconds(90), 0, 'budget'],
        ['smartos', 'Smartphone Background','Development',
            new Date(2018, 3, 25), null, daysToMilliseconds(90), 0, 'watchos'],
        ['watchUI', 'Watch UI Design','Development',
            new Date(2018, 6, 24), null, daysToMilliseconds(30), 0, 'smartos'],
        ['phoneUI', 'Phone UI Design','Development',
            new Date(2018, 7, 24), null, daysToMilliseconds(30), 0, 'watchUI'],
        ['getdata', 'Get EKG data','Machine Learning',
            new Date(2018, 7, 24), null, daysToMilliseconds(30), 0, null],
        ['mlfeatures', 'Feature Design','Machine Learning',
            new Date(2018, 8, 24), null, daysToMilliseconds(140), 0, 'getdata'],
        ['mlmodel', 'Model Design','Machine Learning',
            new Date(2018, 8, 24), null, daysToMilliseconds(140), 0, 'getdata'],
        ['mltraining', 'Training','Machine Learning',
            new Date(2018, 8, 24), null, daysToMilliseconds(140), 0, 'getdata'],
        ['production', 'Prepare Production Model','Machine Learning',
            new Date(2019, 1, 13), null, daysToMilliseconds(30), 0, 'mltraining'],
        ['webservice', 'Web Service','Web Development',
            new Date(2019, 2, 13), null, daysToMilliseconds(126), 0, null],
        ['testing', 'Testing','Testing',
            new Date(2019, 6, 17), null, daysToMilliseconds(90), 0, 'webservice'],
        ['demo', 'Final Demo','Wrap Up',
            new Date(2019, 9, 17), null, daysToMilliseconds(2), 0, 'testing'],
        ['signoff', 'Sign Off','Wrap Up',
            new Date(2019, 9, 19), null, daysToMilliseconds(1), 0, null],
    ]);

    var options = {
        height: (1080 * 4)
    };

    var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

    chart.draw(data, options);
}