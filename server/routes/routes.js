const dummyList = [
    {
      date: "2017-08-24",
      globalClock: "2785.3",
      localClock: "2411.9",
      moatzaSum: "0",
      shmira: "171",
      biuv: "0",
      id: 5736
    },
    {
      date: "2017-10-24",
      globalClock: "2841.3",
      localClock: "2446.2",
      moatzaSum: "317",
      shmira: "171",
      biuv: "186",
      id: 5737
    }
];


module.exports = app => {
    app.get(`/`, (req, res) => {
		res.sendfile('./public/index.html');
	});

    app.get(`/water`, (req, res) => {
        res.json(dummyList);
    });
};