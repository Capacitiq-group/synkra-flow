"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pollingHelper = exports.DedupeStrategy = void 0;
const tslib_1 = require("tslib");
const core_utils_1 = require("@activepieces/core-utils");
var DedupeStrategy;
(function (DedupeStrategy) {
    DedupeStrategy[DedupeStrategy["TIMEBASED"] = 0] = "TIMEBASED";
    DedupeStrategy[DedupeStrategy["LAST_ITEM"] = 1] = "LAST_ITEM";
})(DedupeStrategy || (exports.DedupeStrategy = DedupeStrategy = {}));
exports.pollingHelper = {
    poll(polling_1, _a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* (polling, { store, auth, propsValue, maxItemsToPoll, files, server, }) {
            var _b, _c;
            switch (polling.strategy) {
                case DedupeStrategy.TIMEBASED: {
                    const lastEpochMilliSeconds = (yield store.get('lastPoll'));
                    if ((0, core_utils_1.isNil)(lastEpochMilliSeconds)) {
                        throw new Error("lastPoll doesn't exist in the store.");
                    }
                    const items = yield polling.items({
                        store,
                        auth,
                        propsValue,
                        lastFetchEpochMS: lastEpochMilliSeconds,
                        server,
                    });
                    const newLastEpochMilliSeconds = items.reduce((acc, item) => Math.max(acc, item.epochMilliSeconds), lastEpochMilliSeconds);
                    yield store.put('lastPoll', newLastEpochMilliSeconds);
                    return items
                        .filter((f) => f.epochMilliSeconds > lastEpochMilliSeconds)
                        .map((item) => item.data);
                }
                case DedupeStrategy.LAST_ITEM: {
                    const lastItemId = yield store.get('lastItem');
                    const items = yield polling.items({
                        store,
                        auth,
                        propsValue,
                        lastItemId,
                        files,
                        server,
                    });
                    const lastItemIndex = items.findIndex((f) => f.id === lastItemId);
                    let newItems = [];
                    if ((0, core_utils_1.isNil)(lastItemId) || lastItemIndex == -1) {
                        newItems = items !== null && items !== void 0 ? items : [];
                    }
                    else {
                        newItems = (_b = items === null || items === void 0 ? void 0 : items.slice(0, lastItemIndex)) !== null && _b !== void 0 ? _b : [];
                    }
                    // Sorted from newest to oldest
                    if (!(0, core_utils_1.isNil)(maxItemsToPoll)) {
                        // Get the last polling.maxItemsToPoll items
                        newItems = newItems.slice(-maxItemsToPoll);
                    }
                    const newLastItem = (_c = newItems === null || newItems === void 0 ? void 0 : newItems[0]) === null || _c === void 0 ? void 0 : _c.id;
                    if (!(0, core_utils_1.isNil)(newLastItem)) {
                        yield store.put('lastItem', newLastItem);
                    }
                    return newItems.map((item) => item.data);
                }
            }
        });
    },
    onEnable(polling_1, _a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* (polling, { store, auth, propsValue, server, isRepublish, }) {
            var _b;
            switch (polling.strategy) {
                case DedupeStrategy.TIMEBASED: {
                    if (isRepublish && !(0, core_utils_1.isNil)(yield store.get('lastPoll'))) {
                        break;
                    }
                    yield store.put('lastPoll', Date.now());
                    break;
                }
                case DedupeStrategy.LAST_ITEM: {
                    if (isRepublish && !(0, core_utils_1.isNil)(yield store.get('lastItem'))) {
                        break;
                    }
                    const items = yield polling.items({
                        store,
                        auth,
                        propsValue,
                        lastItemId: null,
                        server,
                    });
                    const lastItemId = (_b = items === null || items === void 0 ? void 0 : items[0]) === null || _b === void 0 ? void 0 : _b.id;
                    if (!(0, core_utils_1.isNil)(lastItemId)) {
                        yield store.put('lastItem', lastItemId);
                    }
                    else {
                        yield store.delete('lastItem');
                    }
                    break;
                }
            }
        });
    },
    onDisable(polling, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            switch (polling.strategy) {
                case DedupeStrategy.TIMEBASED:
                case DedupeStrategy.LAST_ITEM:
                    return;
            }
        });
    },
    test(polling_1, _a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* (polling, { auth, propsValue, store, files, server, }) {
            let items = [];
            switch (polling.strategy) {
                case DedupeStrategy.TIMEBASED: {
                    items = yield polling.items({
                        store,
                        auth,
                        propsValue,
                        lastFetchEpochMS: 0,
                        server,
                    });
                    break;
                }
                case DedupeStrategy.LAST_ITEM: {
                    items = yield polling.items({
                        store,
                        auth,
                        propsValue,
                        lastItemId: null,
                        files,
                        server,
                    });
                    break;
                }
            }
            return getFirstFiveOrAll(items.map((item) => item.data));
        });
    },
};
function getFirstFiveOrAll(array) {
    if (array.length <= 5) {
        return array;
    }
    else {
        return array.slice(0, 5);
    }
}
//# sourceMappingURL=index.js.map