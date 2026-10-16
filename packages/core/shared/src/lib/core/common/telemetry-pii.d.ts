import { ApEdition } from '../flag/flag';
export declare const pickTelemetryPii: ({ edition, email, firstName, lastName, }: PickTelemetryPiiParams) => TelemetryPii;
type PickTelemetryPiiParams = {
    edition: ApEdition;
    email: string;
    firstName: string;
    lastName: string;
};
type TelemetryPii = {
    email: string;
    firstName: string;
    lastName: string;
} | Record<string, never>;
export {};
