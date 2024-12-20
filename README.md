<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# Application de Gestion de Réservations de Bureaux (Booking Flex Office)
Cette application facilite la gestion des espaces de travail en mode Flex Office en permettant aux utilisateurs de réserver des bureaux via une interface intuitive. L'intégration entre le frontend et le backend se fait via Inertia.js, simplifiant la gestion des vues tout en utilisant Laravel pour le backend et React pour les composants frontend.



## **Installation**

### **Prérequis**
- **Serveur** : Apache/Nginx
- **PHP** : Version 8.0 ou supérieure
- **Node.js** : Version 16 ou supérieure
- **Composer** : Dernière version
- **MySQL** : Version 5.7 ou supérieure

---

### **Étapes d'installation**

1. **Clonez le dépôt :**
   ```bash
   git clone <url-du-repo>
   ```

2. **Installez les dépendances Laravel :**

* Installez les dépendances PHP :
   ```bash
   composer install
   ```
* Configurez l'environnement :
   ```bash
    cp .env.example .env
   ```

* Générez la clé de l'application :
  ```bash
    php artisan key:generate
  ```

3. **Installez les dépendances ReactJS :**

* Installez les dépendances JavaScript :
   ```bash
   npm install
   ```

* Compilez les assets pour le développement :
   ```bash
   npm run dev
   ```

4. **Démarrez l'application :**
   ```bash
    php artisan serve
    ```


## **Stucture de l'application**

BOOKING_FLEX_OFFICE

├── 📂app                 
├── 📂bootstrap           
├── 📂config               
├── 📂database            
├── 📂lang             
├── 📂public               
├── 📂resources            
├── 📂routes            
├── 📂storage              
├── 📂tests               
├── .editorconfig         
├── .env.example          
├── .gitattributes        
├── .gitignore            
├── artisan               
├── composer.json         
├── jsconfig.json         
├── package.json          
├── phpunit.xml           
├── postcss.config.js     
├── README.md             
├── tailwind.config.js    
└── vite.config.js        

