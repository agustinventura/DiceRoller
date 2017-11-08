(function(tau) {
	var page, list, listHelper;

	/* Check circular device */
	if (tau.support.shape.circle) {
		list = page.querySelector(".ui-listview");
		if (list !== null) {
			document.addEventListener("pagebeforeshow", function(e) {
				page = e.target;
				if (list) {
					/*
					 * Create SnapListView and binding rotary event using
					 * tau.helper
					 */
					listHelper = tau.helper.SnapListStyle.create(list);
				}
			});

			document.addEventListener("pagebeforehide", function(e) {
				listHelper.destroy();
			});
		}
	}
}(tau));