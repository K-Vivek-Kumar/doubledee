export const GreetFunction = async () => {
    try {
        const greetModule = await import("../../pkg/doubledee");
        await greetModule.default();
        return greetModule.greet;
    } catch (err) {
        console.log(err);
        return null;
    }
};
