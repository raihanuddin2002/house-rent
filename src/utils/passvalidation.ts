export type PasswordType = 'strong' | 'medium' | 'weak';

export default function passwordValidation(password: string): PasswordType | null {
    if (password === '') return null;

    const strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/.test(password);
    const medium = /^(?=.*[a-zA-Z])(?=^.{8,}$)((?=.*\d)|(?=.*[^a-zA-Z0-9]))/.test(password);

    if (strong) return 'strong';
    else if (medium) return 'medium';
    else return 'weak';
};

export const buttonDisabledByPassword = (passwordType: PasswordType | null) => {
    if (passwordType === 'strong') return false;
    if (passwordType === 'medium') return true;
    if (passwordType === 'weak') return true;
    else return true
}