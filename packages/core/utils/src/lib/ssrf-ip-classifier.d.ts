declare function isBlockedIp({ ip, allowList }: {
    ip: string;
    allowList: string[];
}): boolean;
export declare const ssrfIpClassifier: {
    isBlockedIp: typeof isBlockedIp;
};
export {};
