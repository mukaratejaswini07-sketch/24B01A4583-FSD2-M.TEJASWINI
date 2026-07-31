class College {
    static readonly collegeName: string = "Green College";

    static display(): void {
        console.log("College:", College.collegeName);
    }
}

College.display();