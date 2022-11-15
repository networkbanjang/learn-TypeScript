"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class Block {
    constructor(prevHash, height, data) {
        this.prevHash = prevHash;
        this.height = height;
        this.data = data;
        this.hash = Block.callculateHash(prevHash, height, data);
    }
    static callculateHash(prevHash, height, data) {
        const toHash = `${prevHash}${height}${data}`;
        return crypto_1.default.createHash("sha256").update(toHash).digest("hex");
    }
}
class BlcokChain {
    constructor() {
        this.blocks = [];
    }
    getPrevhash() {
        if (this.blocks.length === 0)
            return "";
        return this.blocks[this.blocks.length - 1].hash;
    }
    addBlock(data) {
        const newBlock = new Block(this.getPrevhash(), this.blocks.length + 1, data);
        this.blocks.push(newBlock);
    }
    getBlocks() {
        return [...this.blocks];
    }
}
const blockChain = new BlcokChain();
blockChain.addBlock('first one');
blockChain.addBlock('second one');
blockChain.addBlock('third one');
console.log(blockChain.getBlocks());
