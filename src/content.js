const isMergeButtonDisabled = (active, from) => {
	const currentHour = new Date().getHours();
	const doNotMergeFromTime = Number.parseInt(from, 10);
	return active && doNotMergeFromTime > currentHour;
};

const enableOrNotMergeButton = () => {
	chrome.storage.sync.get(
		{
			doNotMergeFrom: "18",
			doNotMergeActive: false,
		},
		(items) => {
			if (isMergeButtonDisabled(items.doNotMergeActive, items.doNotMergeFrom))
				return;
			// ページ読み込み完了まで待つ
			setTimeout(() => {
				const mergeButton = document.querySelector("button.merge-box-button");
				if (mergeButton) {
					mergeButton.disabled = true;
				}
			}, 1000);
		},
	);
};

enableOrNotMergeButton();
