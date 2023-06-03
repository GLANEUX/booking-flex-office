import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Place from "@/components/Place";
import ReservationLayout from "@/Layouts/ReservationLayout";
import { Inertia } from "@inertiajs/inertia";

export default function Reservation(props) {
    // permet d'accéder aux propriétés envoyées à la page du côté
    // serveur depuis le côté client en utilisant le hook React usePage()
    // contient les informations sur les places récupérées
    // depuis la base de données grâce au contrôleur Laravel

    const { places, reservations } = usePage().props;
    // console.log(places);
    // places.map(place => console.log(place.numplace));

    const [horairerecup, setHoraireRecup] = useState("");
    const [horaire, setHoraire] = useState("");
    const [etagerecup, setEtagerecup] = useState("1");
    const [placerecup, setPlaceRecup] = useState("");
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);

    // permet de définir les données du formulaire
    // et de les initialiser avec des valeurs par défaut
    const [data, setData] = useState({
        date: new Date().toISOString().substring(0, 10),
        h1:'',
        h2: '',
        h3: '',
        h4: '',
        journee: '',
        id_place: selectedPlaceId,
    });

    // permet de gérer le changement de l'horaire
    const horaireChange = (event) => {
        const choice = event.target.value;
        setHoraireRecup(choice);
        setHoraire(event.target.value);
        console.log(event.target.value);
    };


    // permet de gérer le changement de l'étage
    const etageChange = (event) => {
        {
            const choice = event.target.value;
            setEtagerecup(choice);
        }
    };

    // permet de gérer la sélection d'une place
    const handlePlaceSelect = (idPlace) => {
        setSelectedPlaceId(idPlace);
        setData((prevState) => ({
            ...prevState,
            id_place: idPlace,
        }));
    };

    // méthode prevState pour maintenir les anciennes valeurs de données
    // inchangées et mettre à jour seulement la valeur qui a été modifiée.
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData((prevState) => ({
            ...prevState,
            id_place: selectedPlaceId,
            h1: value,
            h2: value,
            h3: value,
            h4: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/reservationplace", data);
        console.log(data);
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Réservation
                </h2>
            }
        >
            <Head title="Reservation" />

            <div className="pt-5 flex flex-wrap">
                <div className="w-full md:w-1/3 px-4 mb-4">
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-white px-6 py-3 border-b">
                            <h3 className="text-lg font-medium text-gray-900">
                                Réservation
                            </h3>
                            <h2>L'id de la place est {placerecup}</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col py-4 px-6 bg-gray-50">
                                <div className="mb-2 text-sm font-medium text-gray-500 uppercase tracking-wide pt-5">
                                    Date
                                </div>
                                <div className="flex flex-colbg-gray-50">
                                    <input
                                        type="date"
                                        name="date"
                                        value={data.date}
                                        onChange={handleChange}
                                        className="w-full py-2 px-3 rounded-lg border border-gray-300 mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div className="mb-2 text-sm font-medium text-gray-500 uppercase tracking-wide pt-5">
                                    Horaires
                                </div>
                                <select
                                    className="w-full py-2 px-3 rounded-lg border border-gray-300 mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                    id="monselect"
                                    onChange={horaireChange}
                                >
                                    <option value="">--Veuillez choisir une tranche horaire !--</option>
                                    <option value="h1">H1 (8:00-10:00)</option>
                                    <option value="h2">H2 (10:00-12:00)</option>
                                    <option value="h3">H3 (13:00-15:00)</option>
                                    <option value="h4">H4 (15:00-17:00)</option>
                                    <option value="journee">Journée</option>
                                </select>

                                <div className="mb-2 text-sm font-medium text-gray-500 uppercase tracking-wide pt-5">
                                    Étage
                                </div>
                                <select
                                    className="w-full py-2 px-3 rounded-lg border border-gray-300 mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                    id="monselect"
                                    onChange={etageChange}
                                >
                                    <option value="1">Étage 1</option>
                                    <option value="2">Étage 2</option>
                                    <option value="3">Étage 3</option>
                                </select>
                                <button className="w-full text-center py-2 mt-4 bg-black text-white rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75">
                                    Réserver
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full md:w-2/3 px-4 mb-4">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Choisissez une place
                        </div>
                    </div>
                    <div className="py-4 px-6 w-50 bg-gray-50">
                        {horairerecup == "" ? (
                            <div className="w-50 h-50 bg-success ">
                                <div
                                    className="container border border-dark flex justify-center"
                                    style={{ padding: 25 }}
                                >
                                    <p>
                                        Veuillez choisir votre tranche horaire
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <ReservationLayout>
                                <div>
                                    {places.map((place, index) => (
                                        <div key={index}>
                                            {etagerecup == place.numetage ? (
                                                <>
                                                    <Place
                                                        key={place.idplace}
                                                        modifyparentstatevalue={
                                                            setPlaceRecup
                                                        }
                                                        placeid={place.idplace}
                                                        numplace={
                                                            place.numplace
                                                        }
                                                        onPlaceSelect={
                                                            handlePlaceSelect
                                                        }
                                                        colorPlace={
                                                            reservations.some(
                                                                (reservation) =>
                                                                    (reservation.id_place ===
                                                                        place.idplace &&
                                                                        horaire ==
                                                                            "matin" &&
                                                                        place.matin ==
                                                                            true) ||
                                                                    (reservation.id_place ===
                                                                        place.idplace &&
                                                                        horaire ==
                                                                            "apresmidi" &&
                                                                        place.apresMidi ==
                                                                            true)
                                                            )
                                                                ? "grey"
                                                                : ""
                                                        }
                                                    />
                                                </>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </ReservationLayout>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
