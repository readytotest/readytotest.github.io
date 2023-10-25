import orangeDemoLoginPage from '../../pages/orange-demo-pom/orangeDemoLoginPage';
import orangeDemoDashboardPage from '../../pages/orange-demo-pom/orangeDemoDashboardPage';
import orangeDemoTestData from '../../fixtures/orange-demo/orangeDemoTestData.json';
import orangeDemoProfileMenu from '../../pages/orange-demo-pom/orangeDemoProfileMenu';
import orangeDemoVerticalMenu from '../../pages/orange-demo-pom/orangeDemoVerticalMenu';
import orangeDemoMyInfoPage from '../../pages/orange-demo-pom/orangeDemoMyInfoPage';
import orangeDemoBuzzPage from '../../pages/orange-demo-pom/orangeDemoBuzzPage';
import orangeDemoRecruitmentPage from '../../pages/orange-demo-pom/orangeDemoRecruitmentPage';
import { realClick } from 'cypress-real-events/commands/realClick';

describe('Orange Demo Smoke Test', () => {

    beforeEach(() => {

        cy.visit(Cypress.env('orangeDemoUrl'));
        orangeDemoLoginPage.enterUsername(orangeDemoTestData.loginCredentials.usernameValid);
        orangeDemoLoginPage.enterPassword(orangeDemoTestData.loginCredentials.passwordValid);
        orangeDemoLoginPage.clickLoginButton();      
        orangeDemoDashboardPage.confirmOnDashboardPage();
        cy.log('Login successful!')
      
      });

    afterEach(() => {

        orangeDemoProfileMenu.openProfileMenu();
        orangeDemoProfileMenu.clickLogoutMenu();
        /*Need to add the wait because if one of the it blocks fails, then 
        after each will fail on confirming the login button unless the wait is there.
        The wait isn't required if all it blocks pass???? */
        cy.wait(1000);
        orangeDemoLoginPage.confirmLoginButtonExists();
        cy.log('Logout successful!');
      
    });

        it('My Info: edit name and work email', () => {
        
            orangeDemoVerticalMenu.clickMyInfoLink();
            
            orangeDemoMyInfoPage.clickPersonalDetailsLink();
            orangeDemoMyInfoPage.clearFirstNameField();
            orangeDemoMyInfoPage.checkIfFirstNameFieldEmpty();
            orangeDemoMyInfoPage.typeFirstName();
            orangeDemoMyInfoPage.checkIfFirstNameFieldNotEmpty();

            orangeDemoMyInfoPage.clearMiddleNameField();
            orangeDemoMyInfoPage.checkIfMiddleNameFieldEmpty();
            orangeDemoMyInfoPage.typeMiddleName();
            orangeDemoMyInfoPage.checkIfMiddleNameFieldNotEmpty();

            orangeDemoMyInfoPage.clearLastNameField();
            orangeDemoMyInfoPage.checkIfLastNameFieldEmpty();
            orangeDemoMyInfoPage.typeLastName();
            orangeDemoMyInfoPage.checkIfLastNameFieldNotEmpty();
            orangeDemoMyInfoPage.clickFirstMyInfoSaveButton();
            //This wait is required or save won't occur
            cy.wait(1000);
            orangeDemoMyInfoPage.confirmMyInfoSaveSuccessful();

            orangeDemoMyInfoPage.clickContactDetailsLink();
            orangeDemoMyInfoPage.clearWorkEmailField();
            orangeDemoMyInfoPage.checkIfWorkEmailFieldEmpty();
            orangeDemoMyInfoPage.typeWorkEmail();
            orangeDemoMyInfoPage.checkIfWorkEmailFieldNotEmpty();
            orangeDemoMyInfoPage.clickFirstMyInfoSaveButton();
            //This wait is required or save won't occur
            cy.wait(1000);
            orangeDemoMyInfoPage.confirmMyInfoSaveSuccessful();
                 
        })

        it('Buzz: add post. Dashboard: check if buzz post appears and confirm headings on page', () => {
        
            orangeDemoVerticalMenu.clickBuzzLink();
            orangeDemoBuzzPage.typeBuzzMessage();
            orangeDemoBuzzPage.postBuzzMessage();
            orangeDemoVerticalMenu.clickDashboardLink();
            orangeDemoDashboardPage.confirmDashboardBuzzFeed();
            orangeDemoDashboardPage.confirmDashboardTimeAtWork();
            orangeDemoDashboardPage.confirmDashboardMyActions();
                    
        })

        it('Recruitment: add candidate and upload resume', () => {
        
            orangeDemoVerticalMenu.clickRecruitmentLink();
            orangeDemoRecruitmentPage.clickSelectAllCandidatesRecordsCheckbox();
            orangeDemoRecruitmentPage.clickDeleteSelectedCandidatesRecordsButton();
            orangeDemoRecruitmentPage.confirmDeleteSelectedCandidatesRecordsModal();
            orangeDemoRecruitmentPage.clickAddCandidateButton();
            orangeDemoRecruitmentPage.typeCandidateFirstName();
            orangeDemoRecruitmentPage.typeCandidateMiddleName();
            orangeDemoRecruitmentPage.typeCandidateLastName();
            orangeDemoRecruitmentPage.typeCandidateEmail();
            orangeDemoRecruitmentPage.openCandidateVacancyMenu();
            orangeDemoRecruitmentPage.selectSeniorQaLeadFromCandidateVacancyMenu();
            orangeDemoRecruitmentPage.uploadResume()
            //Intermittently doesn't upload the file. The wait seems to make it happen less frequently.
            cy.wait(5000);
            orangeDemoRecruitmentPage.clickCandidateSaveButton();
            orangeDemoRecruitmentPage.confirmCandidateSaveSuccessful();
            orangeDemoRecruitmentPage.clickCandidatesHeaderButton();
            orangeDemoRecruitmentPage.confirmCandidateWasAdded();
            orangeDemoRecruitmentPage.viewProfileOfFirstPersonListedInCandidateRecords();
            orangeDemoRecruitmentPage.confirmCandidateProfile();
            orangeDemoRecruitmentPage.confirmResumeWasUploaded();
            orangeDemoRecruitmentPage.downloadResume();
            orangeDemoRecruitmentPage.confirmResumeWasDownloaded();
            })
            
        
      });