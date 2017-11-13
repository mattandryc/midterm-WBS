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
        ['Initiate', 'Identify Stake Holders', 'init',
            new Date(2017, 9, 20), new Date(2017, 10, 3), null, 100, null],
        ['Kickoff', 'Project Kickoff Meetings', 'init',
            new Date(2017, 10, 3), null, daysToMilliseconds(17), 100, 'Initiate'],
        ['Scope Statement', 'Scope Statement', 'plan',
            new Date(2017, 10, 21), null, daysToMilliseconds(7), 100, 'Kickoff'],
        ['WBS', 'WBS', 'plan',
            new Date(2017, 10, 23), null, daysToMilliseconds(5), 100, 'Kickoff'],
        ['Schedule', 'Project Schedule','plan',
            new Date(2017, 10, 25), null, daysToMilliseconds(3), 100, 'Kickoff'],
        ['Budget', 'Budget Projection','plan',
            new Date(2017, 10, 29), null, daysToMilliseconds(7), 100, null],
        ['Design UI', 'App UI Design','execute',
            new Date(2017, 11, 7), null, daysToMilliseconds(60), 11, null],
        ['webservice', 'Web Service','execute',
            new Date(2018, 2, 21), null, daysToMilliseconds(30), 0, null],
        ['WatchOS background', 'WatchOS Background','execute',
            new Date(2017, 11, 20), null, daysToMilliseconds(60), 0, null],
        ['iOS background', 'iOS Background','execute',
            new Date(2017, 11, 20), null, daysToMilliseconds(60), 0, null],
        ['Consult', 'Consult Medical Experts','execute',
            new Date(2017, 11, 7), null, daysToMilliseconds(90), 5, null],
        ['ML backend', 'ML Backend','execute',
            new Date(2017, 11, 7), null, daysToMilliseconds(120), 0, null],
        ['ML clientside', 'ML Clientside','execute',
            new Date(2017, 11, 20), null, daysToMilliseconds(120), 0, null],
        ['sync service', 'Watch/Phone sync service','execute',
            new Date(2018, 1, 20), null, daysToMilliseconds(30), 0, 'WatchOS background'],
        ['test', 'Testing','execute',
            new Date(2018, 3, 21), null, daysToMilliseconds(90), 0, 'ML clientside'],
        ['launch beta', 'Beta Launch','execute',
            new Date(2018, 5, 30), null, daysToMilliseconds(90), 0, 'webservice'],
        ['full rollout', 'Full Launch','live',
            new Date(2018, 9, 1), null, daysToMilliseconds(2), 0, 'launch beta'],
        ['monitor', 'User Feedback','live',
            new Date(2018, 9, 1), null, daysToMilliseconds(200), 0, 'launch beta'],
        ['bugs', 'Triage Bugs','ongoing',
            new Date(2018, 9, 14), null, daysToMilliseconds(200), 0, 'launch beta'],
        ['signoff', 'Project Signoff','end',
            new Date(2019, 4, 1), null, daysToMilliseconds(1), 0, null]
    ]);

    var options = {
        height: (1080 * 4)
    };

    var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

    chart.draw(data, options);
}