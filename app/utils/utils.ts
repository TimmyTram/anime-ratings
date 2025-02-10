import { ArgumentError } from '../types/ArgumentError';

export function checkRequiredArgs(args: Record<string, any>, requiredArgs: string[]): void {
    const missingArgs = requiredArgs.filter(arg => args[arg] === undefined || args[arg] === null);

    if (missingArgs.length > 0) {
        throw new ArgumentError(missingArgs);
    }
}

export function checkRequiredArgsFilled(args: Record<string, any>, requiredArgs: string[]): void {
    const missingArgs = requiredArgs.filter(arg => args[arg] === undefined || args[arg] === null || args[arg] === '');

    if (missingArgs.length > 0) {
        throw new ArgumentError(missingArgs);
    }
}