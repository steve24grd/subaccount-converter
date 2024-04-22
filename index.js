class Subaccount {
    constructor(bytes) {
        if (bytes.length !== 32) {
            throw new Error('Subaccount must have exactly 32 bytes.');
        }
        this.bytes = new Uint8Array(bytes);
    }

    toHexString() {
        return Array.from(this.bytes)
            .map(byte => byte.toString(16).padStart(2, '0'))
            .join('');
    }
}

function convertToSubaccount(nonce) {
    const subaccountBytes = new Uint8Array(32); // Create a Uint8Array with 32 bytes, initialized to 0
    const nonceBytes = new ArrayBuffer(4); // Create a buffer for a 4-byte integer
    const view = new DataView(nonceBytes);

    view.setUint32(0, nonce, false); // Set the 32-bit integer at offset 0 in big-endian format

    // Copy the 4 bytes of the nonce at the end of the 32-byte array
    subaccountBytes.set(new Uint8Array(nonceBytes), 32 - 4);

    const subaccount = new Subaccount(subaccountBytes);
    return subaccount.toHexString(); // Return the hexadecimal string representation
}

function HexStringToBlob(hexString) {
    if (hexString.length !== 64) {
        throw new Error("Input must be a 64-character hex string.");
    }

    // Initialize an array to store the formatted pairs
    let formattedArray = [];

    // Loop through the string in steps of 2 to process two characters at a time
    for (let i = 0; i < hexString.length; i += 2) {
        // Extract two characters
        let pair = hexString.slice(i, i + 2);
        
        // Format the pair and push it to the array
        formattedArray.push(`\\${pair}`);
    }

    // Join all formatted pairs into a single string
    return formattedArray.join('');
}

(
    () => {
        const nonce = 12;
        const subaccount = convertToSubaccount(nonce);
        console.log(subaccount);

        // const hexString = "0000000000000000000000000000000000000000000000000000000000000000";
        // const formattedString = HexStringToBlob(hexString);
        // console.log(formattedString);
    }
)();
