import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import { useFormik } from "formik";
import * as Yup from 'yup';
import './styles.css'

function AddCard({ onAdd }) {
    const formik = useFormik({
        initialValues: {
            name: "",
            cardNumber: "",
            limit: "",
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Please enter name'),
            cardNumber: Yup.string().required('Please enter card number'),
            limit: Yup.number().required('Please enter limit'),
        }),
        onSubmit: (values) => {
            if (onAdd) {
                onAdd(values);
            }
        },
    });
    return (
        <Form onSubmit={formik.handleSubmit}>
            <h3>Add</h3>
            <Form.Group as={Col} md="4" className="form-group" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder=""
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    className={formik.touched.name && formik.errors.name ? 'error' : ''}
                />
                {formik.touched.name && formik.errors.name ? (
                    <div className="error-message">{formik.errors.name}</div>
                ) : null}
            </Form.Group>

            <Form.Group as={Col} md="4" className="form-group" controlId="formBasicCardNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                    id="cardNumber"
                    name="cardNumber"
                    value={formik.values.cardNumber}
                    onChange={formik.handleChange}
                    type="text"
                    placeholder=""
                    className={formik.touched.cardNumber && formik.errors.cardNumber ? 'error' : ''}
                />
                {formik.touched.cardNumber && formik.errors.cardNumber ? (
                    <div className="error-message">{formik.errors.cardNumber}</div>
                ) : null}
            </Form.Group>
            <Form.Group as={Col} md="4" className="form-group" controlId="formBasicLimit">
                <Form.Label>Limit</Form.Label>
                <Form.Control
                    type="number"
                    placeholder=""
                    id="limit"
                    name="limit"
                    value={formik.values.limit}
                    onChange={formik.handleChange}
                    className={formik.touched.limit && formik.errors.limit ? 'error' : ''}
                />
                {formik.touched.limit && formik.errors.limit ? (
                    <div className="error-message">{formik.errors.limit}</div>
                ) : null}
            </Form.Group>
            <Button variant="primary" type="submit">
                Add
            </Button>
        </Form>
    );
}

export default AddCard;
