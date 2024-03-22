import { PRIVATE_KEY_SIZE } from "@mysten/sui.js/cryptography";
import {
  Ed25519Keypair,
  Ed25519PublicKey,
} from "@mysten/sui.js/keypairs/ed25519";

enum VMNetWork {
  DEVNET = "devnet",
  TESTNET = "testnet",
}

class SuiVM {
  private address!: string;
  private keypair!: Ed25519Keypair;
  private publicKey!: Ed25519PublicKey;
  private readonly secretKeyStorage = "secret_key";
  private network!: VMNetWork;
  constructor(network: VMNetWork = VMNetWork.DEVNET) {
    this.network = network;
    this.initAccount();
  }

  initAccount() {
    let secretKeyArray: number[] = [];
    const localSecretKey = localStorage.getItem(this.secretKeyStorage);
    if (localSecretKey) {
      secretKeyArray = JSON.parse(localSecretKey);
    } else {
      for (let i = 0; i < PRIVATE_KEY_SIZE; i++) {
        secretKeyArray.push(Math.floor(Math.random() * 256));
      }
    }

    this.keypair = Ed25519Keypair.fromSecretKey(
      Uint8Array.from(secretKeyArray)
    );
    this.publicKey = new Ed25519PublicKey(
      this.keypair.getPublicKey().toRawBytes()
    );
    this.address = this.publicKey.toSuiAddress();
    console.log(this.keypair.getSecretKey());
    localStorage.setItem(this.secretKeyStorage, JSON.stringify(secretKeyArray));
  }
}

export const suiVMClient = new SuiVM();
