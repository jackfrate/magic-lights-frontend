export interface RGB {
    r: number;
    g: number;
    b: number;
    a?: number;
}
// can have static functions to convert light to other siht and vice versa

export interface Brightness {
    bright: number;
}

export interface LightStatus {
    r: number;
    g: number;
    b: number;
    a: number;
    bright: number;
}