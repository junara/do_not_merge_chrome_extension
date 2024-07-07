const saveOptions = () => {
	const doNotMergeFrom = document.getElementById("do-not-merge-from").value;
	const doNotMergeActive = document.getElementById(
		"do-not-merge-active",
	).checked;
	chrome.storage.sync.set(
		{
			doNotMergeFrom: doNotMergeFrom,
			doNotMergeActive: doNotMergeActive,
		},
		() => {
			const status = document.getElementById("status");
			status.textContent = "Options saved.";
			setTimeout(() => {
				status.textContent = "";
			}, 750);
		},
	);
};

const restoreOptions = () => {
	chrome.storage.sync.get(
		{
			doNotMergeFrom: "18",
			doNotMergeActive: "false",
		},
		(items) => {
			document.getElementById("do-not-merge-from").value = items.doNotMergeFrom;
			document.getElementById("do-not-merge-active").checked =
				items.doNotMergeActive;
		},
	);
};

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("save").addEventListener("click", saveOptions);
