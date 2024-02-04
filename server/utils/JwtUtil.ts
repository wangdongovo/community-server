import jwt from 'jsonwebtoken';

export default class JwtUtil {
    private static readonly secret = 'KwOr0W4HGTsaokU0'; // 你的密钥

    static generate(payload: object): string {
        return jwt.sign(payload, this.secret);
    }

    static verify(token: string): boolean {
        try {
            jwt.verify(token, this.secret);
            return true;
        } catch (err) {
            return false;
        }
    }
}