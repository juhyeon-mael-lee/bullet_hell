import {
  _decorator,
  Component,
  Node,
  input,
  Input,
  EventKeyboard,
  Vec3,
  KeyCode,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("Player")
export class Player extends Component {
  private _curPos: Vec3 = new Vec3();
  private _deltaPos: Vec3 = new Vec3(0, 0, 0);
  private _targetPos: Vec3 = new Vec3();
  start() {}

  setInput = (active: boolean) => {
    if (active) {
      input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    }
  };

  onKeyDown = (event: EventKeyboard) => {
    switch (event.keyCode) {
      case KeyCode.ARROW_LEFT:
    }
  };

  playerMoveInput = (direction: string) => {};

  update(deltaTime: number) {}
}
