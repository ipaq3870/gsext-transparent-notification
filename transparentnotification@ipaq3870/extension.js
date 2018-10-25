const Lang = imports.lang;
const Main = imports.ui.main;
const MessageTray = imports.ui.messageTray;

let orig;
let banner;

function style() {
  banner = this.source.createBanner(this);
  // https://developer.gnome.org/clutter/stable/ClutterActor.html#clutter-actor-set-opacity
  // Sets the actor's opacity, with zero being completely transparent and 255 (0xff) being fully opaque.
  // 50% opacity
  banner.actor.set_opacity(127);
  return banner;
}

function init() {
}

function enable() {
  orig = MessageTray.Notification.prototype.createBanner;
  MessageTray.Notification.prototype.createBanner = style;
}

function disable() {
  MessageTray.Notification.prototype.createBanner = orig;
}
