export class ArgumentError extends Error {
    missingArgs: string[];

    constructor(missingArgs: string[]) {
        super(`Missing required arguments: ${missingArgs.join(", ")}`);
        this.name = "ArgumentError";
        this.missingArgs = missingArgs;
    }
}