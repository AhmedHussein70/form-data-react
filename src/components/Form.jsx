import { useRef, useState } from "react";
import "./Form.css";
import emailjs from "emailjs-com";
import { useDispatch } from "react-redux";
import { addDataTosending } from "../store/formSlice";

export const Form = () => {
  //   const { dataForm } = useSelector((state) => state.formData);
  //   console.log(dataForm)
  const initialData = {};
  const formRef = useRef();
  const [data, setData] = useState(initialData);
  const [dataform, setDataform] = useState({
    user_name: "",
    email: "",
    message: data,
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    console.log(value);
    setData({ ...data, [id]: value });
  };
  const handleFormData = (e) => {
    e.preventDefault();
    console.log(formRef.current.value);
    try {
      if (formRef.current) {
        dispatch(addDataTosending(data));

        emailjs
          .sendForm(
            "service_fwnxoxj",
            "template_td5qxps",
            e.target,
            "FDhP4mAfIRkqjp6_J"
          )
          .then(
            (result) => {
              console.log(result.text);
              alert("Email sent successfully!");
              formRef.current.reset();
            },
            (error) => {
              console.log(error.text);
              alert("Failed to send email. Please try again.");
            }
          );
      }
      console.log(data);
    } catch (error) {
      console.error("Failed to send data", error);
    }
  };

  return (
    <>
      <div className="parent-form">
        <p className="paragraf-title">
          Please take the next 5-10 minutes to fill out this form. Yes, we know
          this might be lengthy but we need this information to better serve
          you.
        </p>

        <form onSubmit={handleFormData} ref={formRef}>
          <div className="parent-name">
            <div className="name-input">
              <h4>Name</h4>
              <div className="parent-input-name">
                <div className="parent-input">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="firstName">first Name</label>
                </div>

                <div className="parent-input">
                  <input
                    type="text"
                    id="lastName"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="lastName">Last Name</label>
                </div>
              </div>
            </div>

            <div className="name-input">
              <h4>email</h4>
              <div className="parent-input-name">
                <div className="parent-input">
                  <input
                    type="text"
                    id="email"
                    placeholder="example@example.com"
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="email">email</label>
                </div>

                <div className="parent-input">
                  <input
                    type="text"
                    id="country"
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="country">Country</label>
                </div>
              </div>
            </div>

            <div className="name-input">
              <h4>Name of Brand/Company</h4>
              <div className="parent-input-name">
                <div className="parent-input">
                  <input
                    type="text"
                    id="NameOfBrand"
                    placeholder="Sub-brand"
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="NameOfBrand">Sub-brand</label>
                </div>
              </div>
            </div>

            <div className="Description-Brand">
              <h4>Description of Brand/Company</h4>
              <div className="parent-input-name">
                <div className="parent-input">
                  <textarea
                    type="text"
                    id="DescriptionOfBrand"
                    // placeholder="Sub-brand"
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="DescriptionOfBrand">
                    Describe your brand/business in 1 paragraph.
                  </label>
                </div>
              </div>
            </div>

            <div className="Description-Brand">
              <h4>Key Benefits of Brand/Company</h4>
              <div className="parent-input-name">
                <div className="parent-input">
                  <textarea
                    type="text"
                    id="KeyBenefits"
                    placeholder="Sub-brand"
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="KeyBenefits">
                    How your users benefit from your product/service
                  </label>
                </div>
              </div>
            </div>

            <div className="Description-Brand">
              <h4>Competitors</h4>
              <div className="parent-input-name">
                <div className="parent-input">
                  <textarea
                    type="text"
                    id="Competitors"
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="Competitors">
                    Give a list of the primary competitors in your field
                    (provide website links where applicable).
                  </label>
                </div>
              </div>
            </div>

            <div className="Description-Brand">
              <h4>Design Details</h4>
              <div className="parent-input-name">
                <div className="parent-input">
                  <input
                    type="text"
                    id="DesignDetails"
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="DesignDetails">
                    Give a list of the primary competitors in your field
                    (provide website links where applicable).
                  </label>
                </div>
              </div>
            </div>

            <div className="Description-Brand">
              <h4>Design Goal</h4>
              <div className="parent-input-name">
                <div className="parent-input">
                  <textarea
                    type="text"
                    id="DesignGoal"
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="DesignGoal">
                    What the design must do in terms of customers attitude or
                    behaviour.
                  </label>
                </div>
              </div>
            </div>

            <div className="name-input">
              <h4>Colour Scheme</h4>
              <div className="parent-input-name">
                <div className="parent-input">
                  <input
                    type="text"
                    id="ColourScheme"
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="ColourScheme">
                    List colours (be as specific as possible) in order of
                    prominence.
                  </label>
                </div>
              </div>
            </div>

            <div className="Description-Brand">
              <h4>Description of Logo</h4>
              <div className="parent-input-name">
                <div className="parent-input">
                  <textarea
                    type="text"
                    id="DescriptionOfLogo"
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="DescriptionOfLogo">
                    What do you want your logo to look like?
                  </label>
                </div>
              </div>
            </div>

            <div className="name-input">
              <h4>Exact Text for your Logo</h4>
              <div className="parent-input-name">
                <div className="parent-input">
                  <input
                    type="text"
                    id="ExactTextForYourLogo"
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="ExactTextForYourLogo">
                    Only applicable for logos with words included.
                  </label>
                </div>
              </div>
            </div>

            <div className="name-input">
              <h4>Tagline/Slogan</h4>
              <div className="parent-input-name">
                <div className="parent-input">
                  <input
                    type="text"
                    id="TaglineSlogan"
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="TaglineSlogan">
                    Include it only if you want it incorporated in the logo
                    design.
                  </label>
                </div>
              </div>
            </div>

            <div className="Description-Brand">
              <h4>Target Audience</h4>
              <div className="parent-input-name">
                <div className="parent-input">
                  <input
                    type="text"
                    id="TargetAudience"
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="Gender">
              <h4>Gender</h4>
              <div className="parent-input-name">
                <div className="parent-input">
                  <input
                    type="radio"
                    name="option"
                    id="option1"
                    value={"Male"}
                    className="check-box"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="option1">Male</label>
                </div>

                <div className="parent-input">
                  <input
                    type="radio"
                    name="option"
                    id="option2"
                    value={"Female"}
                    className="check-box"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="option2">Female</label>
                </div>

                <div className="parent-input">
                  <input
                    type="radio"
                    name="option"
                    id="option3"
                    value={"female And male"}
                    className="check-box"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="option3">All</label>
                </div>
              </div>
            </div>

            <div className="name-input">
              <div className="parent-input-name">
                <div className="parent-input">
                  <label htmlFor="AgeRange">Age Range</label>
                  <input
                    type="number"
                    id="AgeRange"
                    placeholder=""
                    style={{ marginTop: "10px" }}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="parent-input">
                  <label htmlFor="GeographicLocation">
                    Geographic Location
                  </label>
                  <input
                    type="text"
                    id="GeographicLocation"
                    style={{ marginTop: "10px" }}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="GeographicLocation">
                    Parish/City/State/Country
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="Gender">
            <div className="parent-input-name">
              <div className="parent-button">
                <button className="submit-button" tabIndex="0">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
