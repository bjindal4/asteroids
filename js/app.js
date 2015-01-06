import {Player} from './Player';
import {Asteroid} from './Asteroid';
import {game} from './game';
import {Flame} from './Flame';
import {Bullets} from './Bullets';
import {Asteroids} from './Asteroids';
import {Scoreboard} from './Scoreboard';

let stage, stageWidth, stageHeight, renderer, prevTime, currentTime, delta, player, asteroids, loader, bullets, scoreboard;

loadAssets();

function onAssetsLoaded() {
  init();
  createStage();
  createPlayer();
  createBullets();
  createAsteroids();
  createScoreboard();
  update();
}

function init() {
  asteroids = [];
  currentTime = Date.now();
  prevTime = currentTime;
  delta = 0;
}

function createBullets() {
  bullets = new Bullets();
  stage.addChild(bullets);
}

function createAsteroids() {
  asteroids = new Asteroids();
  stage.addChild(asteroids);
}

function createScoreboard() {
  scoreboard = new Scoreboard();
  stage.addChild(scoreboard);
}

function loadAssets() {
  let assetsToLoader = ['images/flame.json'];
  loader = new PIXI.AssetLoader(assetsToLoader);
  loader.onComplete = onAssetsLoaded;
  loader.load();
}

function createPlayer() {
  player = new Player(stage);
  stage.addChild(player);
  game.player = player;
}

function createStage() {
  stage = new PIXI.Stage(0x000000);
  stageWidth = game.stageWidth;
  stageHeight = game.stageHeight;
  renderer = new PIXI.WebGLRenderer(stageWidth,stageHeight);
  document.body.appendChild(renderer.view);
  game.stage = stage;
}

function update() {
  currentTime = Date.now();
  delta = (currentTime - prevTime) / 32;
  player.update(delta);
  asteroids.update(delta);
  bullets.update(delta);
  renderer.render(stage);
  requestAnimationFrame(update);
  prevTime = currentTime;
}









