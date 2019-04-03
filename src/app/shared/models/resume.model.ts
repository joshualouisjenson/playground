export class ResumeModel {
    Name: string;
    Email: string;
    Phone: string;
    Skills: Array<string>;
    Languages: Array<string>;
    Education: Array<{
        DegreeType: 'Bachelors' | 'Associates' | 'Masters' | 'Ph.D.';
        University: string;
        School: string;
        GraduationDate: string | Date;
        Focuses: Array<string>
    }>
    Experience: Array<{
        Company: string;
        Date: string | [Date, Date];
        Position: string;
        Duties: Array<string>;
    }>;
}
