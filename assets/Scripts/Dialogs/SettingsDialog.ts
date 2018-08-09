import Dialog from "./Dialog";
import AudioController from "../Controllers/AudioController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SettingsDialog extends Dialog {

    @property(cc.Toggle) soundToggle: cc.Toggle = null
    @property(cc.Toggle) musicToggle: cc.Toggle = null

    onLoad() {
        this.soundToggle.isChecked = AudioController.effectVolume == 1
        this.musicToggle.isChecked = AudioController.musicVolume == 1
    }

    soundToggleHandler() {
        AudioController.effectVolume =  this.soundToggle.isChecked ? 1 : 0
    }
    musicToggleHandler() {
        AudioController.musicVolume =  this.musicToggle.isChecked ? 1 : 0
    }


}
