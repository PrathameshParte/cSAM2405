import isAndroid from '../../../../SAPAssetManager/Rules/Common/IsAndroid'; //../IsAndroid

export default function DoneText(context) {
    if (isAndroid(context)) {
        return context.localizeText('save');
    } else {
        return context.localizeText('review_equipment');
    }
}
